const { query } = require("../../db/query")


// to get the enitre schedules infromation of an id
const getSchedules = async ( scheduleId ) => {
    const text = `
        SELECT id
            , "operatorId"
            , "businessName"
            , "opTitle"
            , "pay"
            , "startTime"
            , "endTime"
            , "addressLine1"
            , "addressLine2"
            , "city"
            , "state"
            , "zip"
        FROM schedules
        WHERE id = $1;
    `;
    const [ schedule ] = await query( text, [ scheduleId ] );
    return schedule;
};


// Create a schedules
const createSchedules = async ( { 
    operatorId
    , businessName
    , opTitle
    , pay
    , startTime
    , endTime
    , addressLine1
    , addressLine2
    , city
    , state
    , zip
} ) => {
    const text = `
        INSERT INTO schedules
        ( "operatorId", "businessName", "opTitle", "pay", "startTime", "endTime", "addressLine1", 
        "addressLine2", "city", "state", "zip" )
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `;
    await query( text, 
        [ 
            operatorId
            , businessName
            , opTitle
            , pay
            , startTime
            , endTime
            , addressLine1
            , addressLine2
            , city
            , state
            , zip 
        ],
        );
};

module.exports = {
    getSchedules
    , createSchedules
}