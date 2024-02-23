import BigNumber from 'bignumber.js';
export const convertWeiToEsdt = (amount: BigNumber.Value, decimals?: number, precision?: number): BigNumber => {
    if (!amount) amount = '0';
    return new BigNumber(amount).shiftedBy(decimals == null ? -18 : -decimals).decimalPlaces(precision == null ? 4 : precision, BigNumber.ROUND_FLOOR);
};

export const convertEsdtToWei = (amount: BigNumber.Value, decimals?: number): BigNumber => {
    if (!amount) amount = '0';
    return new BigNumber(amount).shiftedBy(decimals == null ? 18 : decimals).decimalPlaces(0, BigNumber.ROUND_FLOOR);
};

const localDecimalSeparator = 0.1.toLocaleString().replace(/\d/g, '');
const bgFormatter = {
    decimalSeparator: localDecimalSeparator,
    groupSeparator: localDecimalSeparator == '.' ? ',' : '.',
    groupSize: 3
};

export const convertBigNumberValueToLocalString = (
    value: BigNumber.Value,
    precision?: number,
): string => {
    let v = new BigNumber(value).toFormat(precision ? precision : 4, BigNumber.ROUND_FLOOR, bgFormatter);

    // remove trailing zeros
    if (v.search(localDecimalSeparator) >= 0) {
        v = v.replace(/\.?0+$/, '');
    }

    return v;
};





// type
export interface CommonContext {
    fee_percent: number,
    fee_address: string,
    bet_token_id: string,
    nft_token_id: string,
}

export interface BetContext {
    bet_id: number,
    bet_creator_address: string,
    // bet_fighter_address: string,
    bet_creator_nft_nonce: number,
    bet_fighter_nft_nonce: number,
    bet_creator_nft_rank: number,
    bet_fighter_nft_rank: number,
    bet_amount: string,
    bet_opened_timestamp: number,
    bet_closed_timestamp: number,
}

export interface LiderboardContext {
    user_address: string,
    win_amount: string,
    lose_amount: string,
    volumn: string,
}

export interface NftContext {
    nft_nonce: number,
    nft_rank: number,
    nft_fight_update_timestamp: number,
    nft_is_used: boolean,
}

export interface BetNftContext {
    collection: string,
    identifier: string,
    name: string,
    url: string,
    nft_nonce: number,
    nft_rank: number,
    nft_fight_update_timestamp: number,
    nft_is_used: boolean,
}