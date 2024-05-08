import { StatusCodes } from "http-status-codes";

import EmailSequence from "../../../models/sequence.model.js";
import Node from "../../../models/node.model.js";


const updateEmailSequence = async (req, res) => {
    try {
        const sequenceId = req.params.id;
        const { nodes } = req.body;

        const sequence = await EmailSequence.findById(sequenceId);


        for (const nodeData of nodes) {
            let node = null;

            // if the node already exists
            if (sequence.nodes.includes(nodeData.id)) {
                node = await Node.findByIdAndUpdate(nodeData.id, {
                    type: nodeData.type,
                    parameters: nodeData.parameters,
                    position: nodeData.position
                }, { new: true });
            }
            else {
                // if there is no node create it
                node = await Node.create({
                    type: nodeData.type,
                    parameters: nodeData.parameters,
                    sequence: sequence._id,
                    position: nodeData.position
                })
            }

            sequence.nodes.push(node._id)
        }

        await sequence.save();

        return res.status(StatusCodes.CREATED).json({ status: 'success', msg: 'email sequence updated successfully', emailSequence: sequence })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: 'error', msg: `Internal server error : ${error.message}` })
    }
}

export default updateEmailSequence