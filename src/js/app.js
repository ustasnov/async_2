import GameSavingLoader from './gamesavingloader';

function processResponse(saving) {
  return saving;
}

function processError(error) {
  return error.message;
}

(async () => {
  try {
    const data = await GameSavingLoader.load();
    processResponse(data);
  } catch (error) {
    processError(error);
  }
})();
