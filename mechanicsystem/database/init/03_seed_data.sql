INSERT INTO mechanic(name, document, contact, satusLegal)
VALUES 
    ('Tião', '54291861554', '934728524', TRUE),
    ('Ricardo Laranja', '12345678901', '987654321', FALSE),
    ('Carlos', '98765432100', '912345678', TRUE);

INSERT INTO client(name, document, contact, address)
VALUES 
    ('Gabriel', '71854367890', '980809090', 'Rua alameda dos anjos'),
    ('Miguel', '65432198765', '991234567', 'Av. das Palmeiras, 120'),
    ('Jorge', '85296374122', '996655443', 'Travessa das Acácias, 78');

INSERT INTO vehicles.car (model, year, licensePlate, idCliente)
SELECT 'Civic', 2020, 'ABC1234', id FROM client WHERE document = '71854367890';

INSERT INTO vehicles.car (model, year, licensePlate, idCliente)
SELECT 'Corolla', 2019, 'XYZ5678', id FROM client WHERE document = '65432198765';

INSERT INTO vehicles.truck (model, year, licensePlate, idCliente)
SELECT 'Volvo FH', 2022, 'TRK0001', id FROM client WHERE document = '85296374122';