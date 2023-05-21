pragma solidity >=0.8.0;

import "usingtellor/contracts/UsingTellor.sol";
// 0xD9157453E2668B2fc45b7A803D3FEF3642430cC0
contract MyContract is UsingTellor {

  constructor(address payable _tellorAddress) UsingTellor(_tellorAddress) {

  }

  function getBtcSpotPrice() external view returns(uint256) {
    
      bytes memory _queryData = abi.encode("SpotPrice", abi.encode("btc", "usd"));
      bytes32 _queryId = keccak256(_queryData);
      
      (bytes memory _value, uint256 _timestampRetrieved) = getDataBefore(_queryId, block.timestamp - 20 minutes);
      if (_timestampRetrieved == 0) return 0;
      require(block.timestamp - _timestampRetrieved < 24 hours);
      return abi.decode(_value, (uint256));
    }

}