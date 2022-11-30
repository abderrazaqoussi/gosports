import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/`
})

export const getProfile = api
  .get('/auth/me', { withCredentials: true })
  .then(res => res.data)
  .catch(err => err)

export const getTeamsByID = id =>
  api
    .get(`/api/v1/teams/user/${id}`)
    .then(res => res.data)
    .catch(err => err)

export const getUserById = id =>
  api
    .get(`/api/v1/users/${id}`)
    .then(res => res.data)
    .catch(err => err)

//

export const addTeam = teamData => {
  return api
    .post('/api/v1/teams', teamData)
    .then(res => res.data)
    .catch(err => err)
}

export const updateTeamName = (id, data) => {
  return api
    .put(`/api/v1/teams/${id}`, data)
    .then(res => res.data)
    .catch(err => err)
}

export const updateUserRole = data => {
  console.log({ teamId: data.teamId, userId: data.userId })
  return api
    .put(`/api/v1/teams/${data.teamId}/user/${data.userId}`)
    .then(res => res.data)
    .catch(err => err)
}

export const deleteTeam = id =>
  api
    .delete(`/api/v1/teams/${id}`)
    .then(res => res.data)
    .catch(err => err)
