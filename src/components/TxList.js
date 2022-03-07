export default function TxList({ txs }) {
  if (txs.length === 0) return null;

  return (
    <>
      {txs.map((item) => (
        <div key={item} className="alert alert-info mt-5">
          <div className="flex-1">
            <label>Transaction successfully completed</label>
            <br></br>
            <br></br>
            <label>See transaction Hash {item.hash} on Etherscan</label>
          </div>
        </div>
      ))}
    </>
  );
}
