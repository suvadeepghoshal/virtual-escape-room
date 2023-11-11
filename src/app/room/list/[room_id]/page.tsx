import { DifficultyLevel } from '@/types/Room';

export default function RoomDetails({ params }: { params: any }): JSX.Element {
  function convertToEnum(
    room_difficultyLevel: DifficultyLevel
  ): import('react').ReactNode {
    switch (room_difficultyLevel) {
      case DifficultyLevel.easy:
        return 'Easy';
      case DifficultyLevel.medium:
        return 'Medium';
      case DifficultyLevel.hard:
        return 'Hard';
      default:
        return 'Unknown';
    }
  }

  return <>{params.room_id}</>;
}
