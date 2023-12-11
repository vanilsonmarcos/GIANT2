CREATE DEFINER=`root`@`localhost` TRIGGER `apolice_BEFORE_INSERT` BEFORE INSERT ON `apolice` FOR EACH ROW BEGIN
	DECLARE next_number INT;
    DECLARE NUMERO VARCHAR(4) DEFAULT 0000;

    -- Calculate the next number
    SELECT IFNULL(MAX(CAST(SUBSTRING_INDEX(NUMERO, '/', 1) AS UNSIGNED)), 0) + 1 INTO next_number
    FROM apolice;
    
  SET NEW.NUMERO = CONCAT(DATE_FORMAT(NOW(), '%d %m.%Y'), '/', LPAD(next_number, 4, '0'));
END