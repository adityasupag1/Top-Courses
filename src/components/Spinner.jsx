function Spinner(){
   return (
   <div className="flex flex-col items-center justify-center mt-10">
  <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  <p className="mt-2 text-gray-600">Loading...</p>
</div>

   )
}
export default Spinner