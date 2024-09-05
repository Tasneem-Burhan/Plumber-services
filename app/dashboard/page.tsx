export default function Dashboard() {
    return (
    <>
    <div className="flex justify-center text-green-600 text-xlg m-5">
         Register Yourself here..!!!
    </div>
    <div className="flex justify-center bg-green-200">
        <form>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="name" className="block text-lg font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">Email Address</label>
          <div className="mt-2">
            <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">Password</label>
          <div className="mt-2">
            <input type="password" name="password" id="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="confirmPassword" className="block text-lg font-medium leading-6 text-gray-900">Confirm Password</label>
          <div className="mt-2">
            <input type="password" name="confirmPassword" id="confirmPassword" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6">
    <button type="submit" className="rounded-md bg-green-500 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
        </form>
    </div>
    </>
    );
}