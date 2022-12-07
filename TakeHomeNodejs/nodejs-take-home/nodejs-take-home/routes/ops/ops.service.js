const { query } = require("../../db/query")

const getOps = async ( opsId ) => {
    const text = `
        SELECT id
            , "operatorId"
            , "businessID"
            , "jobDescription"
            , "startTime"
            , "endTime"
        FROM ops
        WHERE id = $1;
    `;
    const [ ops ] = await query( text, [ opsId ] );
    return ops;
};

const createOps = async ( { 
    operatorId
    , businessId
    , jobDescription
    , startTime
    , endTime
} ) => {
    const text = `
        INSERT INTO ops
        ( "operatorId", "businessId", "jobDescription", "startTime", "endTime" )
        VALUES ( $1, $2, $3, $4, $5 )
    `;
    await query( text, [ operatorId, businessId, jobDescription, startTime, endTime ] );
};

module.exports = {
    getOps
    , createOps
}