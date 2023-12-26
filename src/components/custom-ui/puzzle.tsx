import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Option from './option';
import createPuzzle from '@/lib/actions/createPuzzleAction';
import SubmitButton from '@/components/custom-ui/submitButton';

export default function puzzle({
  mode,
  editable,
}: {
  mode: string;
  editable: boolean;
}) {
  return (
    <div>
      {mode === 'edit' && editable ? (
        <EditPuzzle />
      ) : mode === 'create' && editable ? (
        <CreatePuzzle />
      ) : (
        <ViewPuzzle />
      )}
    </div>
  );
}

async function EditPuzzle() {
  return <div>Edit puzzle</div>;
}

function CreatePuzzle() {
  return (
    <div className='p-10'>
      <Card className='bg-[#ffffff] rounded-lg shadow-md p-6 max-w-3xl mx-auto'>
        <CardHeader>
          <h2 className='text-2xl font-semibold'>Create One?</h2>
        </CardHeader>
        <form action={createPuzzle}>
          <CardContent className='space-y-6'>
            <div className='space-y-2'>
              <Label
                className='font-medium text-gray-700'
                htmlFor='puzzle-name'
              >
                Puzzle Name
              </Label>
              <Input
                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                id='puzzle-name'
                placeholder='Enter puzzle name'
                type='text'
                name='puzzle-name'
              />
            </div>
            <div className='space-y-2'>
              <Label
                className='font-medium text-gray-700'
                htmlFor='puzzle-question'
              >
                Puzzle Question
              </Label>
              <Textarea
                className='w-full px-3 py-2 border border-gray-300 rounded-md min-h-[100px]'
                id='puzzle-question'
                placeholder='Enter puzzle question'
                name='puzzle-question'
              />
            </div>
            <div className='space-y-2'>
              <Label className='font-medium text-gray-700'>Options</Label>
              <div className='grid gap-4'>
                <Option max={4} />
              </div>
            </div>
            <div className='space-y-2'>
              <Label
                className='font-medium text-gray-700'
                htmlFor='correct-answer'
              >
                Correct Answer
              </Label>
              <Input
                className='w-full px-3 py-2 border border-gray-300 rounded-md'
                id='correct-answer'
                placeholder='Enter correct answer'
                type='text'
                name='correct-answer'
              />
            </div>
            <SubmitButton buttonText={'Generate Puzzle'} />
          </CardContent>
        </form>
      </Card>
    </div>
  );
}

async function ViewPuzzle() {
  return <div>View puzzle</div>;
}
