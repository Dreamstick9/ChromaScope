const api ='/api/v1/mining/pools/1w';
const mock ={
    "pools": [
        {
            "poolId": 112,
            "name": "Foundry USA",
            "link": "https://foundrydigital.com",
            "blockCount": 314,
            "rank": 1,
            "emptyBlocks": 0,
            "slug": "foundryusa",
            "avgMatchRate": 99.97,
            "avgFeeDelta": "-0.03444650",
            "poolUniqueId": 111
        },
        {
            "poolId": 45,
            "name": "AntPool",
            "link": "https://www.antpool.com",
            "blockCount": 152,
            "rank": 2,
            "emptyBlocks": 0,
            "slug": "antpool",
            "avgMatchRate": 99.96,
            "avgFeeDelta": "-0.06956974",
            "poolUniqueId": 44
        },
        {
            "poolId": 37,
            "name": "F2Pool",
            "link": "https://www.f2pool.com",
            "blockCount": 129,
            "rank": 3,
            "emptyBlocks": 0,
            "slug": "f2pool",
            "avgMatchRate": 99.93,
            "avgFeeDelta": "-0.06124264",
            "poolUniqueId": 36
        },
        {
            "poolId": 74,
            "name": "ViaBTC",
            "link": "https://viabtc.com",
            "blockCount": 92,
            "rank": 4,
            "emptyBlocks": 0,
            "slug": "viabtc",
            "avgMatchRate": 99.89,
            "avgFeeDelta": "-0.11548696",
            "poolUniqueId": 73
        },
        {
            "poolId": 103,
            "name": "SpiderPool",
            "link": "https://www.spiderpool.com",
            "blockCount": 81,
            "rank": 5,
            "emptyBlocks": 0,
            "slug": "spiderpool",
            "avgMatchRate": 100,
            "avgFeeDelta": "-0.13497531",
            "poolUniqueId": 102
        },
        {
            "poolId": 142,
            "name": "SECPOOL",
            "link": "https://www.secpool.com",
            "blockCount": 50,
            "rank": 6,
            "emptyBlocks": 0,
            "slug": "secpool",
            "avgMatchRate": 99.93,
            "avgFeeDelta": "-0.06783400",
            "poolUniqueId": 141
        },
        {
            "poolId": 116,
            "name": "MARA Pool",
            "link": "https://marapool.com",
            "blockCount": 46,
            "rank": 7,
            "emptyBlocks": 0,
            "slug": "marapool",
            "avgMatchRate": 99.99,
            "avgFeeDelta": "-0.04512174",
            "poolUniqueId": 115
        },
        {
            "poolId": 5,
            "name": "Luxor",
            "link": "https://mining.luxor.tech",
            "blockCount": 30,
            "rank": 8,
            "emptyBlocks": 0,
            "slug": "luxor",
            "avgMatchRate": 99.93,
            "avgFeeDelta": "-0.03965333",
            "poolUniqueId": 4
        },
        {
            "poolId": 106,
            "name": "Binance Pool",
            "link": "https://pool.binance.com",
            "blockCount": 21,
            "rank": 9,
            "emptyBlocks": 0,
            "slug": "binancepool",
            "avgMatchRate": 99.96,
            "avgFeeDelta": "-0.07205238",
            "poolUniqueId": 105
        },
        {
            "poolId": 44,
            "name": "Braiins Pool",
            "link": "https://braiins.com/pool",
            "blockCount": 15,
            "rank": 10,
            "emptyBlocks": 0,
            "slug": "braiinspool",
            "avgMatchRate": 99.95,
            "avgFeeDelta": "-0.06573333",
            "poolUniqueId": 43
        },
        {
            "poolId": 113,
            "name": "SBI Crypto",
            "link": "https://sbicrypto.com",
            "blockCount": 13,
            "rank": 11,
            "emptyBlocks": 0,
            "slug": "sbicrypto",
            "avgMatchRate": 99.54,
            "avgFeeDelta": "-0.20685385",
            "poolUniqueId": 112
        },
        {
            "poolId": 143,
            "name": "OCEAN",
            "link": "https://ocean.xyz/",
            "blockCount": 12,
            "rank": 12,
            "emptyBlocks": 0,
            "slug": "ocean",
            "avgMatchRate": 96.36,
            "avgFeeDelta": "-0.21915000",
            "poolUniqueId": 142
        },
        {
            "poolId": 162,
            "name": "Mining Squared",
            "link": "https://pool.bsquared.network/",
            "blockCount": 5,
            "rank": 13,
            "emptyBlocks": 0,
            "slug": "miningsquared",
            "avgMatchRate": 99.95,
            "avgFeeDelta": "-0.01986000",
            "poolUniqueId": 161
        },
        {
            "poolId": 3,
            "name": "ULTIMUSPOOL",
            "link": "https://www.ultimuspool.com",
            "blockCount": 4,
            "rank": 14,
            "emptyBlocks": 0,
            "slug": "ultimuspool",
            "avgMatchRate": 99.92,
            "avgFeeDelta": "-0.04717500",
            "poolUniqueId": 2
        },
        {
            "poolId": 7,
            "name": "BTC.com",
            "link": "https://pool.btc.com",
            "blockCount": 4,
            "rank": 15,
            "emptyBlocks": 0,
            "slug": "btccom",
            "avgMatchRate": 99.99,
            "avgFeeDelta": "-0.12587500",
            "poolUniqueId": 6
        },
        {
            "poolId": 144,
            "name": "WhitePool",
            "link": "https://whitebit.com/mining-pool",
            "blockCount": 3,
            "rank": 16,
            "emptyBlocks": 0,
            "slug": "whitepool",
            "avgMatchRate": 99.31,
            "avgFeeDelta": "-0.06000000",
            "poolUniqueId": 143
        },
        {
            "poolId": 163,
            "name": "Innopolis Tech",
            "link": "https://innopolis.tech/",
            "blockCount": 3,
            "rank": 17,
            "emptyBlocks": 0,
            "slug": "innopolistech",
            "avgMatchRate": 100,
            "avgFeeDelta": "-0.02743333",
            "poolUniqueId": 162
        },
        {
            "poolId": 167,
            "name": "RedRock Pool",
            "link": "https://redrock.pro/",
            "blockCount": 3,
            "rank": 18,
            "emptyBlocks": 0,
            "slug": "redrockpool",
            "avgMatchRate": 99.89,
            "avgFeeDelta": "-0.02480000",
            "poolUniqueId": 166
        },
        {
            "poolId": 95,
            "name": "Poolin",
            "link": "https://www.poolin.com",
            "blockCount": 2,
            "rank": 19,
            "emptyBlocks": 0,
            "slug": "poolin",
            "avgMatchRate": 99.94,
            "avgFeeDelta": "-0.11315000",
            "poolUniqueId": 94
        },
        {
            "poolId": 1,
            "name": "Unknown",
            "link": "https://learnmeabitcoin.com/technical/coinbase-transaction",
            "blockCount": 2,
            "rank": 20,
            "emptyBlocks": 0,
            "slug": "unknown",
            "avgMatchRate": 99.94,
            "avgFeeDelta": "-0.05905000",
            "poolUniqueId": 0
        },
        {
            "poolId": 52,
            "name": "NiceHash",
            "link": "https://www.nicehash.com",
            "blockCount": 1,
            "rank": 21,
            "emptyBlocks": 0,
            "slug": "nicehash",
            "avgMatchRate": 100,
            "avgFeeDelta": "-0.06790000",
            "poolUniqueId": 51
        },
        {
            "poolId": 161,
            "name": "Public Pool",
            "link": "https://web.public-pool.io/",
            "blockCount": 1,
            "rank": 22,
            "emptyBlocks": 0,
            "slug": "publicpool",
            "avgMatchRate": 99.41,
            "avgFeeDelta": "-0.02030000",
            "poolUniqueId": 160
        },
        {
            "poolId": 50,
            "name": "Solo CK",
            "link": "https://solo.ckpool.org",
            "blockCount": 1,
            "rank": 23,
            "emptyBlocks": 0,
            "slug": "solock",
            "avgMatchRate": 100,
            "avgFeeDelta": "0.00460000",
            "poolUniqueId": 49
        }
    ],
    "blockCount": 984,
    "lastEstimatedHashrate": 1.048309236948874e+21,
    "lastEstimatedHashrate3d": 934620196446028600000,
    "lastEstimatedHashrate1w": 949124994139932500000
}



async function FetchMining(){
    try{
        let k = await fetch(api)
        let data = await k.json()
        return data
    }catch(error){
        console.log(error)
        return []
    }

}
export { FetchMining }
export default FetchMining
