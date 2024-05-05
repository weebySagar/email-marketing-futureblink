import { StatusCodes } from "http-status-codes";

import EmailSequence from "../../../models/sequence.model.js";
import Node from "../../../models/node.model.js";


export const createEmailSequence = async (req, res) => {
    try {
        const { name, nodes } = req.body;

        const sequence = new EmailSequence({
            name,
            createdBy: req.user._id,
            nodes: []
        })

        for (const nodeData of nodes) {
            const node = await Node.create({
                type: nodeData.type,
                parameters: nodeData.parameters,

            })

            sequence.nodes.push(node._id)
        }

        await sequence.save();

        return res.status(StatusCodes.CREATED).json({ status: 'success', msg: 'email sequence created successfully' })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: 'error', msg: `Internal server error : ${error.message}` })
    }
}