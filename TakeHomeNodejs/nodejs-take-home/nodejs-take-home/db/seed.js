const { query }  = require('./query');

const createOperators = async () => {
    await query( 
        `
            CREATE TABLE IF NOT EXISTS operators (
                id INTEGER PRIMARY KEY NOT NULL
                , "firstName" TEXT
                , "lastName" TEXT NOT NULL
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
            );
        `
    );
}

// Query to create a businesses table if none
const createBusinesses = async () =>{
    await query(
        `
            CREATE TABLE IF NOT EXISTS businesses (
                id INTEGER PRIMARY KEY NOT NULL
                , "businessName" TEXT
                , "opTitle" TEXT
                , "addressLine1" TEXT
                , "addressLine2" TEXT
                , "city" TEXT
                , "state" TEXT
                , "zip" TEXT
            );
        `
    );
}

// Query to create ops table if none
const createOps = async () =>{
    await query(
        `
            CREATE TABLE IF NOT EXISTS ops (
                id INTEGER PRIMARY KEY NOT NULL
                , "operatorId" INTEGER
                , "businessId" INTEGER
                ,"jobDescription" TEXT
                , "startTime" DATETIME
                , "endTime" DATETIME
            );
        `
    );
}

// Query to create schedules table if none
const createSchedules = async () =>{
    await query(
        `
            CREATE TABLE IF NOT EXISTS schedules (
                id INTEGER PRIMARY KEY NOT NULL
                , "operatorId" INTEGER
                , "businessName" TEXT
                , "opTitle" TEXT
                , "pay" DOULBE
                , "startTime" DATETIME
                , "endTime" DATETIME
                , "addressLine1" TEXT
                , "addressLine2" TEXT
                , "city" TEXT
                , "state" TEXT
                , "zip" TEXT
            );
        `
    );
}

const seed = async () => {
    console.log( 'Seeding...' );

    await createOperators();
    // Call function to create a business table if not already one
    await createBusinesses();
    // Call function to create a ops table if not already one
    await createOps();
    // Call function to create a schedules table if not already one
    await createSchedules();

    console.log( 'Seeding Completed.' );
}

module.exports = {
    seed
}