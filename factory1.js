function Developer(name)
{
    this.name = name;
    this.job = "Developer";
};

function Tester(name)
{
    this.name = name;
    this.job = "Tester";
};

function EmployeeFactory()
{
    this.create = (name, job) => 
    {
        const employeeCharge = {
            Developer,
            Tester
        };
        return new employeeCharge[job](name);
    };
};

function say()
{
    console.log(`Hi, I am ${this.name} and I am a ${this.job}`);
};

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Patrick", "Developer"));
employees.push(employeeFactory.create("John", "Tester"));

employees.forEach(emp => 
    {
        say.call(emp);
    }
);