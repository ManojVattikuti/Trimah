import { useState ,useEffect} from "react";
import { ADMINENDPOINTS } from "../constants/ApiConstants";
import axios from "axios";

const fetchMessages=(token)=>{
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMessages = async () => {
          if (!token) {
            setError('No token provided');
            setLoading(false);
            return;
          }
    
          try {
            const response = await axios.get(ADMINENDPOINTS.GETCONTACTS, {
              headers: { Authorization: `Bearer ${token}` },
            });
            setMessages(response.data.messages); // Assuming the response data is an array of users
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchMessages();
      }, [token]);
    
      return { messages, loading, error ,refetch: fetchMessages};
    };
    
    export default fetchMessages;
