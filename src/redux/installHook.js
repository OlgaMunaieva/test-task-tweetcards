import axios from "axios";

const installHook = () => {
  const cancelTokenSource = axios.CancelToken.source();

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data", {
        cancelToken: cancelTokenSource.token,
      });

      // Обработка полученных данных
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Запрос отменен:", error.message);
      } else {
        console.log("Произошла ошибка:", error.message);
      }
    }
  };

  // Запуск запроса
  fetchData();

  // Отмена запроса
  const cancelRequest = () => {
    cancelTokenSource.cancel("Запрос отменен из installHook.js");
  };

  return cancelRequest;
};

export default installHook;
