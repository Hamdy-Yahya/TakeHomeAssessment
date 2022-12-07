const express = require('express');
const { getLastInsertId } = require('../../db');
const { getOps, createOps } = require('./ops.service');

const opsRouter = express.Router();

opsRouter
    .post( 
        '/'
        , async ( req, res ) => {
            await createOps( {
                operatorId: req.body.operatorId
                , businessId: req.body.businessId
                , jobDescription: req.body.jobDescription
                , startTime: req.body.startTime
                , endTime: req.body.endTime
            } );

            const opsId = await getLastInsertId();
            const createdOps = await getOps( opsId );

            return res
                .status( 201 )
                .json( createdOps )
        }
    );

module.exports = {
    opsRouter
}