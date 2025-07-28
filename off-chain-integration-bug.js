// Off Chain Integration Bug (for debugging/logging)

const simulatedOperation = {
  type: "MetaMorpho_Withdraw",
  sender: "0x86eaf48Fd73c1Aa30E801D01d0efFd731c3E5E85",
  address: "0xe9a9aFfb353c2daE8453d041bc849ae5946B996b",
  args: {
    assets: "13000000", // Amount in smallest unit (likely 13 MUSDC)
    owner: "0x86eaf48Fd73c1Aa30E801D01d0efFd731c3E5E85",
    receiver: "0x86eaf48Fd73c1Aa30E801D01d0efFd731c3E5E85",
    slippage: "300000000000000" // Slippage tolerance
  }
};

console.log("Simulating operation:");
console.log(JSON.stringify(simulatedOperation, null, 2));

// Stack trace (source: browser console)
console.warn("Error stack trace:");
console.warn("at Proxy.getPosition (...)");
console.warn("at Proxy.getAccrualPosition (...)");
