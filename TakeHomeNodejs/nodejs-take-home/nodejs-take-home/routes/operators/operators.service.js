const { query } = require("../../db/query")

const getOperator = async ( operatorId ) => {
    const text = `
        SELECT id
            , "firstName"
            , "lastName"
            , "createdAt"
        FROM operators
        WHERE id = $1;
    `;
    const [ operator ] = await query( text, [ operatorId ] );
    return operator;
};

const createOperator = async ( { firstName, lastName } ) => {
    const text = `
        INSERT INTO operators
        ( "firstName", "lastName" )
        VALUES ( $1, $2 )
    `;
    await query( text, [ firstName, lastName ] );
};

//create a join of tables
/*
    Side Note: Tried to query a JOIN to join business table to the given operator ID 
    passed as a parameter. Thought this would work to join tables given that ops table 
    has values that relate to businesses primary-key.

    The query that was used was not returning data properply
    would return undfined.
*/
const getSchedules = async ( operatorId ) =>{
    const text = `
    SELECT 
    "businessName"
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
    WHERE operatorId = $1
    `;
    const [ schedule ] = await query(text, [ operatorId ]);
    return schedule;
};

// Create a schedules
const createSchedules = async ( { 
    operatorId
    , businessName
    , opTitle
    , pay
    , addressLine1
    , addressLine2
    , city
    , state
    , zip
} ) => {
    const text = `
        INSERT INTO businesses
        ( "operator", "businessName", "opTitle", "pay", "addressLine1", 
        "addressLine2", "city", "state", "zip" )
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;
    await query( text, 
        [ 
            operatorId
            , businessName
            , opTitle
            , pay
            , addressLine1
            , addressLine2
            , city
            , state
            , zip 
        ],
        );
};

module.exports = {
    getOperator
    , createOperator
    , getSchedules
    , createSchedules
}