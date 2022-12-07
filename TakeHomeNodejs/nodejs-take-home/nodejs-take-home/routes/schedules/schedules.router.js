const express = require('express');
const { getLastInsertId } = require('../../db');
const { getSchedules, createSchedules } = require('./schedules.service');

const schedulesRouter = express.Router();

schedulesRouter
    .post( 
        '/'
        , async ( req, res ) => {
            await createSchedules( {
                operatorId: req.body.operatorId
                , businessName: req.body.businessName
                , opTitle: req.body.opTitle
                , pay: req.body.pay
                , startTime: req.body.startTime
                , endTime: req.body.endTime
                , addressLine1: req.body.addressLine1
                , addressLine2: req.body.addressLine2
                , city: req.body.city
                , state: req.body.state
                , zip: req.body.zip
            } );

            const scheduleId = await getLastInsertId();
            const createdSchedules = await getSchedules( scheduleId );

            return res
                .status( 201 )
                .json( createdSchedules )
        }
    );

module.exports = {
    schedulesRouter
}