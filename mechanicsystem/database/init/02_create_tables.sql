CREATE TABLE IF NOT EXISTS client(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name CHARACTER(100) NOT NULL,
    document CHARACTER(11) UNIQUE NOT NULL,
    contact CHARACTER(9) UNIQUE NOT NULL,
    address CHARACTER(100)
);

CREATE TABLE IF NOT EXISTS mechanic(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name CHARACTER(100) NOT NULL,
    document CHARACTER(11) UNIQUE NOT NULL,
    contact CHARACTER(9) UNIQUE NOT NULL,
    satusLegal BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS vehicles.car(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    model CHARACTER(50) NOT NULL,
    year INT,
    licensePlate CHARACTER(7) UNIQUE NOT NULL,
    idCliente UUID REFERENCES client(id)
);

CREATE TABLE IF NOT EXISTS vehicles.truck(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    model CHARACTER(50) NOT NULL,
    year INT,
    licensePlate CHARACTER(7) UNIQUE NOT NULL,
    idCliente UUID REFERENCES client(id)
);


CREATE TABLE IF NOT EXISTS workOrders(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    vehicle_type VARCHAR(10) NOT NULL,
    idVehicle UUID NOT NULL,
    idMechanic UUID REFERENCES mechanic(id),
    services CHARACTER(255),
    timeExecute TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status CHARACTER(20)
);