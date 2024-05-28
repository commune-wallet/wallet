const en = {
  accounts: {
    paraText: 'Your Keys to a New Internet',
    createAccount: 'Create An Account',
    importSeed: 'import seed phrase',
    or: 'or',
    selectAccount: 'Select Account',
  },
  nftMarketplace: {
    header: '💎  Explore NFTs',
  },
  nftCollection: {
    listings: 'Listings',
    collectionSize: 'Collection Size',
    sales: 'Sales',
    volume: 'Volume',
    floor: 'Floor',
  },
  nftBuyDetails: {
    buy: 'Buy',
    forSale: 'For sale',
  },
  nftPurchaseDetails: {
    congratsTxt: 'Congrats on your new NFT! 🎉',
  },
  nftSettle: {
    cta: 'Buy NFT',
    free: 'Free',
    netFee: 'Network Fee',
    marketFee: 'Marketplace Fee',
    headerLoading: 'Buying..',
    total: 'Total',
    header: 'Confirm Buy',
  },
  createAccount: {
    header: 'Create an account',
    accountName: 'Account name',
    mnemonicLabel: 'Mnemonic Seed',
    copy: 'COPY',
    download: 'DOWNLOAD',
    generated: 'This is a generated 12-word mnemonic seed.',
    saved: 'I have saved my mnemonic seed safely.',
    nextStep: 'Next step',
    checkBox:
      'I understand that I will lose access to the account if I lose this mnemonic phrase.',
    cta: 'Create an Account',
  },
  export: {
    header: 'Export account',
    checkTitle:
      'I understand that I may lose access to digital assets if I disclose my private keys.',
    secretMnemonicLabel: 'Secret Mnemonic',
    copy: 'COPY',
    download: 'DOWNLOAD',
    never:
      'Never disclose this secret. Anyone with this phrase can steal any assets in your account.',
    confirm: 'Confirm',
    done: 'Done',
  },
  importSeed: {
    header: 'Import account',
    addAccount: 'Add account',
    migrationComplete: 'Migration is complete. Continue with import account',
    skip: 'Skip',
    next: 'Next',
    label: 'Enter your Mnemonic Seed phrase',
    migrateTitle: 'Migrate your ICP account',
  },
  wallet: {
    receive: 'Receive',
    send: 'Send',
    noEd: 'Ed25519 address is no longer supported. Please import seed from Export',
    export: 'Export',
    txns: 'Transactions',
  },
  transactions: {
    header: 'Transactions',
    noTxns: 'No Transactions',
  },
  transactionDetails: {
    header: 'Details',
    pleaseCheck: 'Please check transaction Id',
    from: 'From',
    to: 'To',
    transaction: 'Transaction',
    amount: 'Amount',
    value: 'Value',
    txnFees: 'Transaction Fees',
    total: 'Total',
    activityLog: 'Activity Log',
    txnNarrate: 'Transaction created with a value of',
  },
  transactionConfirm: {
    networkFee: 'Network Fee',
    dexFee: 'DEX Fee',
    free: 'Free',
    total: 'Total',
  },
  walletAddressBook: {
    addRecp: 'Add recipient',
    myAccounts: 'My Accounts',
    recents: 'Recents',
    noRecent: 'No recent sent addresses',
    lastSent: 'Last sent on',
    noPers: 'No other personal accounts to send',
  },
  walletSendTokens: {
    noZeroAmount: 'Amount cannot be 0',
    payDone: 'Payment Done! Check transactions for more details.',
    tryAgain: 'Please try again! Error: ',
    successTxn: 'Successfully transferred to ',
    successNftTxn: 'Successfully transferred NFT to ',
    addRecp: 'Add recipient',
    selectedAsset: 'Selected Asset',
    balance: 'Balance: ',
    txnFee: 'Transaction Fee',
    next: 'Next',
    send: 'Send',
    max: 'Max',
    amount: 'Amount',
    amountPlace: 'amount up to 8 decimal places',
    inSuf: 'Insufficient balance.',
    noZero: 'Amount cannot be zero.',
    noEmpty: 'Amount cannot be empty.',
    total: 'Total',
    noZeroWith: 'Amount cannot be zero. Transaction fees is',
  },
  walletReceiveTokens: {
    header: 'Receive',
    tooltip: 'Share this unique id to receive ',
    pubAddr: 'Public Address',
    cta: 'Export Account',
    princTooltip:
      'With Principal IDs you can create canisters, and authenticate yourself on Internet Computer apps & services.',
    princLabel: 'Your Principal Id',
  },
  addNetwork: {
    header: 'Add a Network',
    selectNet: 'Select Networks',
    cta: 'Update',
  },
  selectTokens: {
    tokensListed: 'Tokens Listed',
    cta: 'Update',
    header: 'Select Tokens',
  },
  nftList: {
    noNFTs: 'No NFTs Found',
    free: 'Free',
    claimed: 'Claimed',
    explore: 'Explore Collections',
    forSale: 'For sale',
    unlisted: 'Unlisted',
  },
  listNFT: {
    cancel: 'Cancel Public Sale',
    updatePrice: 'Update Price for Public Sale',
    listNFT: 'List NFT for Public sale',
    updateBtn: 'Update Price',
    listBtn: 'List for Public Sale',
    info: 'Enter a price upto 8 decimal places for public sale. Listing is free and on sale of NFT, 2.0% of the amount will be deducted towards 1.0% Creators Royalty fee, and a 1% Network Marketplace fee',
    cancelInfo:
      'Cancel listing is free and will unlist your NFT from public sale.',
    placeholder: 'price up to 8 decimal places',
  },
  nftDetails: {
    transfer: 'Transfer',
    cancel: 'Cancel',
    listed: 'Listed for sale',
    unlisted: 'Unlisted',
  },
  nftAirdropDetails: {
    listed: 'Listed for sale',
    airdrop: 'Airdrop',
    free: 'Free',
    claimed: 'Claimed',
  },
  createNFT: {
    txns: 'Transactions',
  },
  walletSettings: {
    header: 'Account Settings',
    web3: 'Default Web3 Provider',
    checkbox: 'Use Commune Wallet as your default Web3 wallet provider',
    connectDapps: 'Connected Dapps',
    language: 'Language',
    trustedDapps: 'Trusted Dapps',
  },
  dappDetails: {
    dappOrigin: 'Dapp Origin',
    connectAddr: 'Connected Address',
    dappReqs: ' Dapp Requests -',
    reqId: 'Request Id',
    completedOn: 'Completed on',
    reqType: 'Request Type',
    batchReq: 'Batch Request',
    response: 'Response',
  },
  stake: {
    cta: 'Add Stake To Liquidity Pool',
    add: 'Add',
    stake: 'Stakes',
    fees: 'LP Fees',
    price: 'Price',
    complete: 'Stake Complete! Updating Balances',
    done: 'Done!',
    selectSecond: 'Select second token!',
  },
  stakeEth: {
    header: 'Stake ETH',
    stake: 'Stake',
    unstake: 'Unstake',
    claimRewards: 'Claim Rewards',
    yourStake: 'Your Stake',
    stakingRewards: 'Staking Rewards',
    total: 'Total Staked',
    validatorFee: 'Validator Fee',
    max: 'Max',
    info: 'The Ethereum network rewards stakers for helping secure the blockchain. By staking ETH, you can earn up to 5% APY risk free from your self custody wallet.',
  },
  stakeEthConfirm: {
    stake: 'Stake',
    unstake: 'Unstake',
    cancel: 'Cancel',
    txnComplete: 'Transaction Complete!',
    estGas: 'Estimated Gas Fee',
    total: 'Total',
    stakeSucc: 'Stake request submitted successfully!',
    unstakeSucc: 'Unstake request submitted successfully!',
  },
  swap: {
    info: 'Commune DEX lets you swap your tokens with no central middleman. Fees are used to offset emissions.',
    mintFees: 'Mint Fees',
    swapFees: 'Swap Fees',
    price: 'Price',
    totalSupply: 'Total Supply',
    inSuf: 'Insufficient Balance',
    next: 'Next',
    swap: 'Swap',
    stakeCompl: 'Stake Complete! Updating Balances',
    selectSec: 'Select second token!',
    done: 'Done!',
  },
  tokenDetailsWithInfo: {
    mint: 'Mint',
    recv: 'Receive',
    send: 'Send',
    stake: 'Stake',
    marketCap: 'Market Cap',
    vol: '24h Volume',
    maxSupply: 'Max Supply',
    yourStake: 'Your Stake',
    stakeRewards: 'Staking Rewards',
  },
  tokenDetails: {
    select: 'Select Tokens',
    totalBalance: 'Total Balance',
    tokens: 'Tokens',
    nfts: 'NFTs',
    apps: 'Apps',
    rec: 'Receive',
    send: 'Send',
    export: 'Export',
  },
  common: {
    passwordForAc: 'password for this account',
    requiredPlaceholder: 'REQUIRED',
    wrongPass: 'Wrong password! Please try again',
  },
};

export default en;