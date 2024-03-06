export const useLocationHash = () => {
  const getHash = () => window.location.hash
  const setHash = (hash: string) => {
    window.location.hash = hash
  }

  return {
    getHash,
    setHash,
  }
}
