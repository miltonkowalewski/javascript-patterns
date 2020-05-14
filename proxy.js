function CryptocurrencyApi()
{
    this.getValue = function(coin)
    {
        console.log("Calling External API...")
        switch(coin)
        {
            case "Bitcoin":
                return "$8,500"
            case "Litecoin":
                return "$50"
            case "Ethereum":
                return "$175"
        }
    }
}

function CryptocurrencyProxy()
{
    this.api = new CryptocurrencyApi()
    this.cache = {}

    this.getValue = function(coin)
    {
        if(this.cache[coin] == null)
        {
            console.log(`chache created for: ${coin}`)
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin]
    }
}

const proxy = new CryptocurrencyProxy()

for(let i = 0; i < 10; i++)
{
    console.log(proxy.getValue("Bitcoin"))
    console.log(proxy.getValue("Litecoin"))
    console.log(proxy.getValue("Ethereum"))
}