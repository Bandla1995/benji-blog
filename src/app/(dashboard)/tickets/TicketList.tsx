import Link from "next/link";

interface Ticket {
  id: string,
  title: string,
  body: string,
  priority: string,
  user_email: string
}

async function getTickets(): Promise<Ticket[]>  {
    const res = await fetch('http://localhost:4000/tickets' , {
        next: {
            revalidate: 0
        }
    });
    
 if (!res.ok) {
    throw new Error(`Failed to fetch tickets: ${res.status}`);
  }

  return res.json();
}
export default async function TicketList() {
    const tickets: Ticket[] = await getTickets();

    if (tickets.length === 0) {
    return <p className="text-center">There are no open tickets, yay!</p>;
  }


  return (
      <>
          {tickets.map((ticket) => (
              <div key={ticket.id} className="card my-5">
                  <Link href={`/tickets/${ticket.id}`}>
                  <h3>{ticket.title}</h3>
                  <p>{ticket.body.slice(0, 200)}...</p>
                  <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                      </div>
                      </Link>
                
                        {tickets.length === 0 && (
                        <p className="text-center">There  no open tickects, yay!</p>
                      )}
                  
              
          </div>
          ))}
      </>
  )
}
