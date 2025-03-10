export const validateToken = async (token) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/validate`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.ok;
};
