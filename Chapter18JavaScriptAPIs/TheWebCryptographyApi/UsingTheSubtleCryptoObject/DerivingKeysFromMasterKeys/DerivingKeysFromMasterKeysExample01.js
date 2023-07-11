(async function() {
  const ellipticCurve = 'P-256';
  const algoIdentifier = 'ECDH';
  const derivedKeySize = 128;

  const params = {
    name: algoIdentifier,
    namedCurve: ellipticCurve
  };

  const keyUsages = ['deriveBits'];

  const keyPairA = await crypto.subtle.generateKey(params, true, keyUsages);
  const keyPairB = await crypto.subtle.generateKey(params, true, keyUsages);

  // Derive key bits from A's public key and B's private key
  const derivedBitsAB = await crypto.subtle.deriveBits(
      Object.assign({ public: keyPairA.publicKey }, params),
      keyPairB.privateKey,
      derivedKeySize);

  // Derive key bits from B's public key and A's private key
  const derivedBitsBA = await crypto.subtle.deriveBits(
      Object.assign({ public: keyPairB.publicKey }, params),
      keyPairA.privateKey,
      derivedKeySize);

  const arrayAB = new Uint32Array(derivedBitsAB);
  const arrayBA = new Uint32Array(derivedBitsBA);

  // Ensure key arrays are identical
  console.log(
      arrayAB.length === arrayBA.length &&
      arrayAB.every((val, i) => val === arrayBA[i]));  // true
})();
