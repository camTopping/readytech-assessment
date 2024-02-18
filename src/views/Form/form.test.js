import validate_age from "./validators/validate_age";
import validate_email from "./validators/validate_email";
import validate_integer from "./validators/validate_integer";
import validate_name from "./validators/validate_name";

describe('validate_email function', () => {
    it('should return true for a valid email', () => {
        expect(validate_email('test@example.com')).toBe(true);
    });

    it('should return false for an invalid email', () => {
        expect(validate_email('not_an_email')).toBe(false);
    });

    it('should return false for an empty string', () => {
        expect(validate_email('')).toBe(false);
    });

    it('should return false for null', () => {
        expect(validate_email(null)).toBe(false);
    });

    it('should return false for undefined', () => {
        expect(validate_email(undefined)).toBe(false);
    });

    it('should return false for missing "@" symbol', () => {
        expect(validate_email('testexample.com')).toBe(false);
    });

    it('should return false for missing "." after "@"', () => {
        expect(validate_email('test@examplecom')).toBe(false);
    });

    it('should return false for missing domain', () => {
        expect(validate_email('test@.com')).toBe(false);
    });

    it('should return false for missing top-level domain', () => {
        expect(validate_email('test@example')).toBe(false);
    });
});

describe('validate_integer function', () => {
    it('should return true for a valid integer', () => {
        expect(validate_integer('101')).toBe(true);
    });

    it('should return false for a float', () => {
        expect(validate_integer('101.1')).toBe(false)
    })

    it('should return false for float with a missing 0', () => {
        expect(validate_integer('.1')).toBe(false)
    })

    it('should return false for a string only containing .', () => {
        expect(validate_integer('.')).toBe(false)
    })

    it('should return false for a string containing special characters', () => {
        expect(validate_integer('/')).toBe(false)
    })

    it('should return false if an empty string is provided', () => {
        expect(validate_integer('')).toBe(false)
    })

    it('should return false for null', () => {
        expect(validate_integer(null)).toBe(false);
    });

    it('should return false for undefined', () => {
        expect(validate_integer(undefined)).toBe(false);
    });
})

describe('validate_name function', () => {
    it('should return true if the name is under 50 characters', () => {
        expect(validate_name('a'.repeat(50))).toBe(true)
    });

    it('should return false for a name over 50 characters', () => {
        expect(validate_name('a'.repeat(51))).toBe(false)
    });
})

describe('validate_age function', () => {
    it('should return true for a age between 18 and 100', () => {
        expect(validate_age('25')).toBe(true)
    });

    it('should return false for a age below 18', () => {
        expect(validate_age('16')).toBe(false)
    });

    it('should return false for a age above 100', () => {
        expect(validate_age('101')).toBe(false)
    });

    it('should return true for age 18', () => {
        expect(validate_age('18')).toBe(true)
    });

    it('should return true for age 100', () => {
        expect(validate_age('100')).toBe(true)
    });
})