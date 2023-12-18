import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function puzzle({
  mode,
  editable,
}: {
  mode: string;
  editable: boolean;
}): JSX.Element {
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

function EditPuzzle(): JSX.Element {
  return <div>Edit puzzle</div>;
}

function CreatePuzzle(): JSX.Element {
  return (
    <div className='p-10'>
      <Card className='bg-[#ffffff] rounded-lg shadow-md p-6 max-w-3xl mx-auto'>
        <CardHeader>
          <h2 className='text-2xl font-semibold'>Create One?</h2>
        </CardHeader>
        {/* server side action to be done to submit the form details to appwrite */}
        <form action=''>
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
              />
            </div>
            <div className='space-y-2'>
              <Label className='font-medium text-gray-700'>Options</Label>
              <div className='grid gap-4'>
                <div className='flex space-x-2'>
                  <Input
                    className='flex-grow px-3 py-2 border border-gray-300 rounded-md'
                    placeholder='Option 1'
                  />
                  <Button className='bg-indigo-600 text-white rounded-md'>
                    +
                  </Button>
                </div>
                <div className='flex space-x-2'>
                  <Input
                    className='flex-grow px-3 py-2 border border-gray-300 rounded-md'
                    placeholder='Option 2'
                  />
                  <Button className='bg-indigo-600 text-white rounded-md'>
                    +
                  </Button>
                </div>
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
              />
            </div>
            <Button className='w-full bg-indigo-600 text-white py-2 rounded-md'>
              Generate Puzzle
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}

function ViewPuzzle(): JSX.Element {
  return <div>View puzzle</div>;
}
