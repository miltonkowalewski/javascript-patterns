function Fedex()
{
    this.calculate = package => 
    {
        // calc logic ...
        return 2.45
    }
}

function UPS() {
    this.calculate = package =>
    {
        // calc logic ...
        return 1.56
    }
}

function USPS() 
{
    this.calculate = package => 
    {
        // calc logic ...
        return 4.5
    }
}

function Shipping()
{
    this.company = ""
    this.setStrategy = company =>
    {
        this.company = company
    }
    this.calculate = package =>
    {
        return this.company.calculate(package)
    }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()

const package = { from: 'Alabama', to: 'Georgia', weight: 1.56 }

const shipping = new Shipping()

shipping.setStrategy(fedex)
console.log("Fedex: " + shipping.calculate(package))

shipping.setStrategy(ups)
console.log("USPS: " + shipping.calculate(package))