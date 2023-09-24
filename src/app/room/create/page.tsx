import Link from "next/link";

export default function CreateRoom() {
    return <div>
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">Create Room</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        Fill in the details to create an escape room
                    </p>


                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="text"
                                   className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                                Room Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="roomNamw"
                                    name="roomName"
                                    type="text"
                                    autoComplete="room-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/*<div className="sm:col-span-4">*/}
                        {/*    <label htmlFor="username"*/}
                        {/*           className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                        {/*        Username*/}
                        {/*    </label>*/}
                        {/*    <div className="mt-2">*/}
                        {/*        <div*/}
                        {/*            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 dark:focus-within:ring-indigo-400 sm:max-w-md">*/}
                        {/*            <span*/}
                        {/*                className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>*/}
                        {/*            <input*/}
                        {/*                type="text"*/}
                        {/*                name="username"*/}
                        {/*                id="username"*/}
                        {/*                autoComplete="username"*/}
                        {/*                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"*/}
                        {/*                placeholder="janesmith"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="col-span-full">
                            <label htmlFor="roomDescription"
                                   className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                                Room Description
                            </label>
                            <div className="mt-2">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Describe the room</p>
                        </div>

                        {/*<div className="col-span-full">*/}
                        {/*    <label htmlFor="photo"*/}
                        {/*           className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                        {/*        Photo*/}
                        {/*    </label>*/}
                        {/*    <div className="mt-2 flex items-center gap-x-3">*/}
                        {/*        /!*<UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true"/>*!/*/}
                        {/*        <button*/}
                        {/*            type="button"*/}
                        {/*            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"*/}
                        {/*        >*/}
                        {/*            Change*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-span-full">*/}
                        {/*    <label htmlFor="cover-photo"*/}
                        {/*           className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                        {/*        Cover photo*/}
                        {/*    </label>*/}
                        {/*    <div*/}
                        {/*        className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-gray-200/25 px-6 py-10">*/}
                        {/*        <div className="text-center">*/}
                        {/*            /!*<PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>*!/*/}
                        {/*            <div className="mt-4 flex text-sm leading-6 text-gray-600">*/}
                        {/*                <label*/}
                        {/*                    htmlFor="file-upload"*/}
                        {/*                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"*/}
                        {/*                >*/}
                        {/*                    <span>Upload a file</span>*/}
                        {/*                    <input id="file-upload" name="file-upload" type="file" className="sr-only"/>*/}
                        {/*                </label>*/}
                        {/*                <p className="pl-1">or drag and drop</p>*/}
                        {/*            </div>*/}
                        {/*            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="border-b border-gray-900/10 dark:border-gray-200/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">Other required
                        information about the room</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Keep the time in seconds</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/*<div className="sm:col-span-3">*/}
                        {/*    <label htmlFor="first-name"*/}
                        {/*           className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                        {/*        First name*/}
                        {/*    </label>*/}
                        {/*    <div className="mt-2">*/}
                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            name="first-name"*/}
                        {/*            id="first-name"*/}
                        {/*            autoComplete="given-name"*/}
                        {/*            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="sm:col-span-3">*/}
                        {/*    <label htmlFor="last-name"*/}
                        {/*           className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                        {/*        Last name*/}
                        {/*    </label>*/}
                        {/*    <div className="mt-2">*/}
                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            name="last-name"*/}
                        {/*            id="last-name"*/}
                        {/*            autoComplete="family-name"*/}
                        {/*            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="sm:col-span-4">*/}
                        {/*    <label htmlFor="text"*/}
                        {/*           className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                        {/*        Room Name*/}
                        {/*    </label>*/}
                        {/*    <div className="mt-2">*/}
                        {/*        <input*/}
                        {/*            id="roomNamw"*/}
                        {/*            name="roomName"*/}
                        {/*            type="text"*/}
                        {/*            autoComplete="room-name"*/}
                        {/*            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="sm:col-span-3">
                            <label htmlFor="difficultyLevel"
                                   className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                                Room Difficulty
                            </label>
                            <div className="mt-2">
                                <select
                                    id="difficultyLevel"
                                    name="difficultyLevel"
                                    autoComplete="difficulty-level"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value="0">Easy</option>
                                    <option value="1">Medium</option>
                                    <option value="2">Difficult</option>
                                </select>
                            </div>
                        </div>

                        {/*<div className="col-span-full">*/}
                        {/*    <label htmlFor="street-address"*/}
                        {/*           className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                        {/*        Street address*/}
                        {/*    </label>*/}
                        {/*    <div className="mt-2">*/}
                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            name="street-address"*/}
                        {/*            id="street-address"*/}
                        {/*            autoComplete="street-address"*/}
                        {/*            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="maxTime"
                                   className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                                Time Limit To Solve
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="maxTime"
                                    id="maxTime"
                                    autoComplete="max-time"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/*<div className="sm:col-span-2">*/}
                        {/*    <label htmlFor="region"*/}
                        {/*           className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                        {/*        State / Province*/}
                        {/*    </label>*/}
                        {/*    <div className="mt-2">*/}
                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            name="region"*/}
                        {/*            id="region"*/}
                        {/*            autoComplete="address-level1"*/}
                        {/*            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="sm:col-span-2">*/}
                        {/*    <label htmlFor="postal-code"*/}
                        {/*           className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                        {/*        ZIP / Postal code*/}
                        {/*    </label>*/}
                        {/*    <div className="mt-2">*/}
                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            name="postal-code"*/}
                        {/*            id="postal-code"*/}
                        {/*            autoComplete="postal-code"*/}
                        {/*            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="border-b border-gray-900/10 dark:border-gray-200/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">Notifications</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Great start, Creator! 🚀 You&apos;re about to craft an unforgettable adventure. The escape room
                        you&apos;re creating will transport players to a world of intrigue and challenge. Remember,
                        every
                        puzzle you design adds a layer of excitement. Describe the room with vivid detail, and let your
                        creativity soar! Happy crafting!
                    </p>

                    {/*<div className="mt-10 space-y-10">*/}
                    {/*    <fieldset>*/}
                    {/*        <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">By*/}
                    {/*            Email*/}
                    {/*        </legend>*/}
                    {/*        <div className="mt-6 space-y-6">*/}
                    {/*            <div className="relative flex gap-x-3">*/}
                    {/*                <div className="flex h-6 items-center">*/}
                    {/*                    <input*/}
                    {/*                        id="comments"*/}
                    {/*                        name="comments"*/}
                    {/*                        type="checkbox"*/}
                    {/*                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*                <div className="text-sm leading-6">*/}
                    {/*                    <label htmlFor="comments"*/}
                    {/*                           className="font-medium text-gray-900 dark:text-gray-200">*/}
                    {/*                        Comments*/}
                    {/*                    </label>*/}
                    {/*                    <p className="text-gray-500">Get notified when someones posts a comment on a*/}
                    {/*                        posting.</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="relative flex gap-x-3">*/}
                    {/*                <div className="flex h-6 items-center">*/}
                    {/*                    <input*/}
                    {/*                        id="candidates"*/}
                    {/*                        name="candidates"*/}
                    {/*                        type="checkbox"*/}
                    {/*                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*                <div className="text-sm leading-6">*/}
                    {/*                    <label htmlFor="candidates"*/}
                    {/*                           className="font-medium text-gray-900 dark:text-gray-200">*/}
                    {/*                        Candidates*/}
                    {/*                    </label>*/}
                    {/*                    <p className="text-gray-500">Get notified when a candidate applies for a*/}
                    {/*                        job.</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="relative flex gap-x-3">*/}
                    {/*                <div className="flex h-6 items-center">*/}
                    {/*                    <input*/}
                    {/*                        id="offers"*/}
                    {/*                        name="offers"*/}
                    {/*                        type="checkbox"*/}
                    {/*                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*                <div className="text-sm leading-6">*/}
                    {/*                    <label htmlFor="offers"*/}
                    {/*                           className="font-medium text-gray-900 dark:text-gray-200">*/}
                    {/*                        Offers*/}
                    {/*                    </label>*/}
                    {/*                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an*/}
                    {/*                        offer.</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </fieldset>*/}
                    {/*    <fieldset>*/}
                    {/*        <legend className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">Push*/}
                    {/*            Notifications*/}
                    {/*        </legend>*/}
                    {/*        <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your*/}
                    {/*            mobile phone.</p>*/}
                    {/*        <div className="mt-6 space-y-6">*/}
                    {/*            <div className="flex items-center gap-x-3">*/}
                    {/*                <input*/}
                    {/*                    id="push-everything"*/}
                    {/*                    name="push-notifications"*/}
                    {/*                    type="radio"*/}
                    {/*                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"*/}
                    {/*                />*/}
                    {/*                <label htmlFor="push-everything"*/}
                    {/*                       className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                    {/*                    Everything*/}
                    {/*                </label>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex items-center gap-x-3">*/}
                    {/*                <input*/}
                    {/*                    id="push-email"*/}
                    {/*                    name="push-notifications"*/}
                    {/*                    type="radio"*/}
                    {/*                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"*/}
                    {/*                />*/}
                    {/*                <label htmlFor="push-email"*/}
                    {/*                       className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                    {/*                    Same as email*/}
                    {/*                </label>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex items-center gap-x-3">*/}
                    {/*                <input*/}
                    {/*                    id="push-nothing"*/}
                    {/*                    name="push-notifications"*/}
                    {/*                    type="radio"*/}
                    {/*                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"*/}
                    {/*                />*/}
                    {/*                <label htmlFor="push-nothing"*/}
                    {/*                       className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">*/}
                    {/*                    No push notifications*/}
                    {/*                </label>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </fieldset>*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 hover:underline"
                      href={"/"}>
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    </div>
}