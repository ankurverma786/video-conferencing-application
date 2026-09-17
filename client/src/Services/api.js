export const joinMeeting = async (roomCode, token) => {
  const response = await fetch(
    "http://localhost:5000/api/meetings/join",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ roomCode }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};