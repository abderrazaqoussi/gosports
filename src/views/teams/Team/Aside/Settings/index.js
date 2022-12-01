import TeamAddLink from './components/TeamAddLink'
import TeamName from './components/TeamName'
import DeletTeam from './components/DeletTeam'
import ExitTeam from './components/ExitTeam'
import PendingList from './components/PendingList'
import useUserId from 'src/utils/hooks/useUserId'

export default function Settings({ team }) {
  console.log(team)
  const { data: myId } = useUserId()
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px',
        borderTop: '1px solid #edf2f4'
      }}
    >
      <TeamName
        teamName={team?.name}
        teamId={team?._id}
        editable={
          team.members.find(e => e.id === myId)?.role === 'owner' ||
          team.members.find(e => e.id === myId)?.role === 'coach'
            ? true
            : false
        }
      />
      <TeamAddLink link={team?.inviteCode} teamId={team?._id} />
      {team.pendingList.length ? <PendingList list={team.pendingList} teamId={team?._id} /> : null}
      {/*  */}
      {team.members.find(e => e.id === myId)?.role === 'owner' ? (
        <DeletTeam teamId={team?._id} />
      ) : (
        <ExitTeam teamId={team?._id} />
      )}
    </div>
  )
}
