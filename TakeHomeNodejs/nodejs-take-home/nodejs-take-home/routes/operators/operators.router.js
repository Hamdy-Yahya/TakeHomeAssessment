const express = require('express');
const { getLastInsertId } = require('../../db');
const { getOperator, createOperator, getSchedules, createSchedules } = require('./operators.service');

const operatorsRouter = express.Router();

operatorsRouter
    .get( 
        '/:operatorId'
        , async ( req, res ) => {
            const operatorId = req.params.operatorId;
            const operator = await getOperator( operatorId );

            return res
                .status( 200 )
                .json( operator )
        }
    )
    .post( 
        '/'
        , async ( req, res ) => {
            await createOperator( {
                firstName: req.body.firstName
                , lastName: req.body.lastName
            } );

            const operatorId = await getLastInsertId();
            const createdOperator = await getOperator( operatorId );

            return res
                .status( 201 )
                .json( createdOperator )
        }
    )

    /*
    Deceided to add the GET request for schedules in the 
    operators collection because it has a smiliar path/endpoint 
    to operators
    */

    .get(
        '/:operatorId/schedules'
        , async (req, res) =>{
            const operatorId = req.params.operatorId;
            const schedule = await getSchedules( operatorId );
            /*
                schedule returns a single row of data from database 
                instead of multiple data rows
            */ 
            console.log(schedule);
            return res
                .status( 200 )
                .json( schedule )
        }
    )

module.exports = {
    operatorsRouter
}