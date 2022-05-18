import ContractDeployerFactory from "../helpers/deploy";

async function main() {
  const factory = new ContractDeployerFactory();
  await factory.createContractDeployer("CgsNFT", []).deploy();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
