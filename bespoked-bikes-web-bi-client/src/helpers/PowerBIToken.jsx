import axios from 'axios';

const tenantId = import.meta.env.VITE_TENANT_ID;
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const workspaceId = import.meta.env.VITE_WORKSPACE_ID;

console.log(tenantId);
console.log(clientId);
console.log(clientSecret);
console.log(workspaceId);

console.log(import.meta.env.VITE_TENANT_ID);
console.log(import.meta.env.VITE_CLIENT_ID);
console.log(import.meta.env.VITE_CLIENT_SECRET);
console.log(import.meta.env.VITE_WORKSPACE_ID);

const getAccessToken = async () => {
  // const url = `https://login.microsoftonline.us/${tenantId}/oauth2/token`;
  const url = `https://api.powerbi.com/v1.0/${tenantId}/GenerateToken`;

  console.log(tenantId);
console.log(clientId);
console.log(clientSecret);
console.log(workspaceId);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    }
  };

  const data = {
    accessLevel : "View"
  };

  console.log(data);

  const response = await axios.post(url, data, config);

  console.log(response[0]);

  if (response.length > 0) {
    return response[0].access_token;
  } else {
    throw new Error('Access token not found');
  }
}

export default getAccessToken;

