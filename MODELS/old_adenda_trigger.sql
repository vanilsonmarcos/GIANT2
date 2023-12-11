CREATE DEFINER=`root`@`localhost` TRIGGER `ADENDA_NUMERO` BEFORE INSERT ON `adenda` FOR EACH ROW BEGIN
	DECLARE next_number INT;
    DECLARE NUMERO VARCHAR(4) DEFAULT 0000;

    -- Calculate the next number
    SELECT IFNULL(MAX(CAST(SUBSTRING_INDEX(NUMERO, '/', 1) AS UNSIGNED)), 0) + 1 INTO next_number
    FROM adenda;

    -- Calculate the formatted year
    SET NUMERO = YEAR(NOW());

    -- Combine the next_number and formatted_year
    SET NEW.NUMERO = CONCAT(LPAD(next_number, 4, '0'), '/' , NUMERO);


END