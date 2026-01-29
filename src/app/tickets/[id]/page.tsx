

export const dynamicParams = true
export async function generateStaticParams() { 
    const res = await fetch('http://localhost:4000/tickets')
    
    const tickets = await res.json()

    return tickets.map((ticket: { id: string }) => ({
        id: ticket.id
    }))
}
async function getTicket(id: string) {
    const res = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 0
        }
    });
//     if (!res.ok) {
//     throw new Error(`Failed to fetch ticket: ${res.status}`)
// }
    
    return res.json()   
}
export default async function TicketDetails({ params }: { params: { id: string } }) {
    const { id } = params
    const ticket = await getTicket(id)

    return (
        <main>
            <nav>
                <h2>Ticket details</h2>

            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>

                  <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                  </div>
            </div>
        </main>
    )
}