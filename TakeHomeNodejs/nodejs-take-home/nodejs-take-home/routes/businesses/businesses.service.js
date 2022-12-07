const { query } = require("../../db/query")

// to get the business infromation given an id
const getBusiness = async ( businessId ) => {
    const text = `
        SELECT id
            , "businessName"
            , "opTitle"
            , "addressLine1"
            , "addressLine2"
            , "city"
            , "state"
            , "zip"
        FROM businesses
        WHERE id = $1;
    `;
    const [ business ] = await query( text, [ businessId ] );
    return business;
};

// Create a business
const createBusiness = async ( { 
    businessName
    , opTitle
    , addressLine1
    , addressLine2
    , city
    , state
    , zip
} ) => {
    const text = `
        INSERT INTO businesses
        ( "businessName", "opTitle", "addressLine1", 
        "addressLine2", "city", "state", "zip" )
        VALUES ( $1, $2, $3, $4, $5, $6, $7)
    `;
    await query( text, 
        [ 
            businessName
            , opTitle
            , addressLine1
            , addressLine2
            , city
            , state
            , zip 
        ],
        );
};

module.exports = {
    getBusiness
    , createBusiness
}