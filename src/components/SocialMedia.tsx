import { Button } from "../ui/Button";

export const SocialMedia = () => {
  return (
    <article className="box cols-parent-h">
      <Button 
        href="https://github.com/kizuyoko/inspiration-hub" 
        src='/github.svg'
        alt='GitHub'
        imgClassName='w-6 mr-2'
      />
      <Button 
        href="https://www.linkedin.com/in/kizuyoko/" 
        src='/linkedin.svg'
        alt='LinkedIn'
        imgClassName='w-6'
      />
    </article>   
  );
};