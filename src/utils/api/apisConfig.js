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

export const RemoveUserFromTeam = data => {
  return api
    .delete(`/api/v1/teams/${data.teamId}/user/${data.userId}`)
    .then(res => res.data)
    .catch(err => err)
}

export const addUserToPendingList = data => {
  return api
    .post(`/api/v1/teams/${data.teamId}/user/${data.userId}`)
    .then(res => res.data)
    .catch(err => err)
}

export const AcceptUserDemand = data => {
  console.log(data)
  return api
    .post(`/api/v1/teams/${data.teamId}/user/${data.userId}/confirmed`)
    .then(res => res.data)
    .catch(err => err)
}
export const RejectUserDemand = data => {
  return api
    .post(`/api/v1/teams/${data.teamId}/user/${data.userId}/rejected`)
    .then(res => res.data)
    .catch(err => err)
}

export const getRecordedWorkouts = id => {
  return api
    .get(`/api/v1/workouts/recorded/${id}`)
    .then(res => res.data)
    .catch(err => err)
}

export const addWorkout = workoutData => {
  return api
    .post('/api/v1/workouts/planned/', workoutData, {
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(workoutData) // body data type must match "Content-Type" header
    })
    .then(res => res.data)
    .catch(err => err)
}

export const teamPlannedWorkoutsByUserId = (teamId, userId) => {
  console.log({ teamId, userId })
  return api
    .get(`/api/v1/workouts/planned/teams/${teamId}/users/${userId}`)
    .then(res => res.data)
    .catch(err => err)
}

export const teamRecordedWorkouts = id => {
  console.log({ id })
  return api
    .get(`/api/v1/workouts/recorded/teams/${id}`)
    .then(res => res.data)
    .catch(err => err)
}
