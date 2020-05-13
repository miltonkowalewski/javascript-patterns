function Developer(name)
{
    this.name = name;
    this.type = "Developer";
};

function Tester(name)
{
    this.name = name;
    this.type = "Tester";
};

function EmployeeFactory()
{
    this.create = (name, type) => 
    {
        const employeeCharge = {
            1: Developer,
            2: Tester
        };
        return new employeeCharge[type](name);
    };
};

function say()
{
    console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
};

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("John", 2));

employees.forEach(emp => 
    {
        say.call(emp);
    }
);