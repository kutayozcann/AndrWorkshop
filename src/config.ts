import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "AndrWorkshop",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr1u0p250s7ufvah6h83azftuskx6xprmcfm3p3d43w5e0ets0zp8csm4af20",
            cw721: "andr12l6pgp0ftw6s0nkjjdc3ks474mddewa48k7vtz65gdv0vs76nyls8s9wxq",
            name: "Kuti",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
    ],
};

export default CONFIG;
