var customMatchers = {
    toBePresent: (util, customEqualityTesters) => {
        return {
            compare: (employee) => {
                var statusCode = employee.getAttendance();
                var result = {};
                result.pass = util.equals(statusCode, 1, customEqualityTesters);
                if (result.pass) {
                    result.message = "Employee " + employee.getName() + " is present today.";
                } else {
                    result.message = "Employee " + employee.getName() + " is absent today.";
                }
                return result;
            }
        }
    }
}


describe('Custom Matcher', () => {

    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });


    it('Expected employee to be present', () => {
        var alice = new Employee("Alice", 5, "Testing");
        alice.markAttendance(1);
        console.log(alice);
        expect(alice).toBePresent();
    });
});
