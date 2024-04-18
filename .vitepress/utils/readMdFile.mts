import fs from "fs"
import matter from 'gray-matter'

function getFileTitle ( filename: string ): string
{
  const fileContent = fs.readFileSync( filename, 'utf-8' )
  const parsedContent = matter( fileContent )
  return parsedContent.data.title
}

export default getFileTitle