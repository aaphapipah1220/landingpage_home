const BASE_URL = "http://localhost:3011";

function getAccessToken() {
  return sessionStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
  return sessionStorage.setItem("accessToken", accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ username, password }) {
  const response = await fetch(`${BASE_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName: username, userPassword: password }),
  });

  const responseJson = await response.json();

  console.log(responseJson);
  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/auth`);
  const responseJson = await response.json();

  if (responseJson.status !== 200) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getTicketNoToken(noTicket) {
  const response = await fetch(`${BASE_URL}/ticket/cek?ticket=${noTicket}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseJson = await response.json();

  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getStatusOpen(open) {
  const response = await fetchWithToken(`${BASE_URL}/ticket?status=${open}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();
  console.log(responseJson);

  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getStatusSuccess(success) {
  const response = await fetchWithToken(
    `${BASE_URL}/ticket?status=${success}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const responseJson = await response.json();
  console.log(responseJson);

  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getStatusPending(pending) {
  const response = await fetchWithToken(
    `${BASE_URL}/ticket?status=${pending}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const responseJson = await response.json();
  console.log(responseJson);

  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getStatusClosed(closed) {
  const response = await fetchWithToken(`${BASE_URL}/ticket?status=${closed}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();
  console.log(responseJson);

  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

async function getTicket(id) {
  const response = await fetchWithToken(`${BASE_URL}/ticket?noTicket=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();
  console.log(responseJson);

  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function countStatusTicket() {
  const response = await fetchWithToken(`${BASE_URL}/ticket/countstatus`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const responseJson = await response.json();
  console.log(responseJson);

  if (responseJson.status !== 200) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function deleteTicket(id) {
  const response = await fetchWithToken(`${BASE_URL}/ticket/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

export {
  getAccessToken,
  putAccessToken,
  login,
  getUserLogged,
  getTicketNoToken,
  deleteTicket,
  getStatusOpen,
  getStatusPending,
  getStatusSuccess,
  getStatusClosed,
  getTicket,
  countStatusTicket,
};
