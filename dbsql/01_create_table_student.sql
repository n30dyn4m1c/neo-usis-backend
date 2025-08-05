CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    student_id VARCHAR(20) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(10),
    dob DATE,
    email VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    title VARCHAR(10),
    dateadmitted DATE,
    maritalstatus VARCHAR(15),

    postaddress1 TEXT,
    postaddress2 TEXT,
    postaddress3 TEXT,
    postaddress4 TEXT,

    permaddress1 TEXT,
    permaddress2 TEXT,
    permaddress3 TEXT,
    permaddress4 TEXT,

    homephone BIGINT,
    businessphone BIGINT,
    faxnumber BIGINT,
    mobilephonenumber BIGINT,

    alternateemailaddress TEXT,
    lastschool TEXT,

    homecountrycode VARCHAR(10),
    homeprovincecode INTEGER,
    homedistrictcode INTEGER,

    residentialcountrycode VARCHAR(10),
    residentialprovincecode INTEGER,
    residentialdistrictcode INTEGER,

    religion TEXT,
    denominationcode VARCHAR(10),

    photo TEXT,

    lastupdatedby VARCHAR(50),
    dateupdated TIMESTAMP WITHOUT TIME ZONE,

    slf_num VARCHAR(15)
);
