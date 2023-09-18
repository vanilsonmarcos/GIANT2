import { z } from "zod";

const DateSchema = z.coerce.date({
    required_error: "A data é um campo obrigatório",
    invalid_type_error: "A data deve ser inserida no formato formato \"YYYY-MM-DD\"",
});

export default DateSchema;