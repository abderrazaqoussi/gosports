import TeamAddLink from './components/TeamAddLink'
import TeamName from './components/TeamName'
import DeletTeam from './components/DeletTeam'
import ExitTeam from './components/ExitTeam'
import useUserId from 'src/utils/hooks/useUserId'

export default function Settings({ team }) {
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
      <ExitTeam teamId={team?._id} />
      {team.members.find(e => e.id === myId)?.role === 'owner' ? <DeletTeam teamId={team?._id} /> : null}
    </div>
  )
}
