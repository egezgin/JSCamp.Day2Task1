const isPrime = (number) => {
    if (number < 2) return false
    
    for (let n = 2; n < number; ++n)
    {
        if (number % n === 0) return false
    }
    
    return true
}

const findPrime = (...data) => {
    for (let i = 0; i < data.length; ++i)
    {
        if (isPrime(data[i]))
            console.log(data[i] + " is prime number.")
        else
            console.log(data[i] + " is not.")
    }
}

findPrime(2,5,8,21,13)

const sumDivisor = (number) => {
    let sum = 0

    for (let i = 0; i <= number; ++i)
    {
        if (number % i === 0)
        {
            // console.log(i + " is divisior of " + number + ".")
            sum += i
        }
    }

    return sum
}

const getAbundancyIndex = (number) => {    
    let index = sumDivisor(number) / number
    // console.log("abundancy index of " + number + " is " + index + ".")
    return index
}

const isFriendlyPair = (first, second) => {
    if (getAbundancyIndex(first) === getAbundancyIndex(second))
    {
        console.log(first + " and " + second + " is friendly pair.")
        return true
    }

    console.log(first + " and " + second + " is not.")
    return false
}

isFriendlyPair(6, 28);

const isPerfect = (number) => {
    if (getAbundancyIndex(number) === 2)
    {
        return true
    }

    return false
}

const findPerfectUpTo1000 = () => {
    console.log("list of perfect numbers below 1000:")
    for (let i = 0; i <= 1000; ++i)
    {
        if (isPerfect(i))
        {
            console.log(i)
        }
    }
}

findPerfectUpTo1000();

const findPrimeUpTo1000 = () => {
    console.log("list of prime numbers below 1000:")
    for (let i = 0; i <= 1000; ++i)
    {
        if (isPrime(i))
        {
            console.log(i)
        }
    }
}

findPrimeUpTo1000();
